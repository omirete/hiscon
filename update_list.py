from datetime import datetime
from typing import Literal
from requests import post, get
from json import dump
import argparse

def log(msg: str, type: Literal["log", "error"] = "log"):
    timestamp = datetime.now().isoformat()[:19]
    log_line = f"{timestamp}: [{type.upper()}] {msg}"
    print(log_line)
    try:
        with open('log', 'a', encoding='utf-8') as f:
            f.write(f"{log_line}\n")
    except FileNotFoundError:
        with open('log', 'w', encoding='utf-8') as f:
            f.write(f"{log_line}\n")


def get_spotify_token(client_id: str, client_secret: str) -> str:
    url = "https://accounts.spotify.com/api/token"
    response = post(
        url,
        headers={
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data={
            "grant_type": "client_credentials",
            "client_id": client_id,
            "client_secret": client_secret
        }
    )
    if response.status_code == 200:
        access_token = response.json()["access_token"]
        return access_token
    else:
        response.raise_for_status()


def get_show_data(show_id: str, access_token: str):
    url = f"https://api.spotify.com/v1/shows/{show_id}"
    auth = f"Bearer {access_token}"
    response = get(
        url,
        headers={"Authorization": auth}
    )
    if response.status_code == 200:
        return response.json()
    else:
        response.raise_for_status()


def save_data(data):
    with open('hiscon.json', 'w', encoding='utf-8') as f:
        dump(data, f, ensure_ascii=False)


def main():
    
    argParser = argparse.ArgumentParser()
    argParser.add_argument("-i", "--client_id", help="Spotify client id", required=True)
    argParser.add_argument("-p", "--client_secret", help="Spotify client secret", required=True)
    argParser.add_argument("-s", "--show_id", help="Spotify show id", required=True)
    args = argParser.parse_args()

    client_id = args.client_id
    client_secret = args.client_secret
    show_id = args.show_id

    log("Started script execution")
    token = get_spotify_token(client_id, client_secret)
    data = get_show_data(show_id, token)
    save_data(data)
    log("Finished script execution")


if __name__ == "__main__":
    main()
