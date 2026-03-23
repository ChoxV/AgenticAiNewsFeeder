import re
from bs4 import BeautifulSoup
def remove_html(text:str)-> str:
    soup = BeautifulSoup(text, "html.parser")
    return soup.get_text(separator=" ")

def remove_urls(text: str) -> str:
    url_pattern = r"http\S+|www\S+|https\S+"
    return re.sub(url_pattern, "", text)

def removes_special_characters(text:str)->str:
    return re.sub(r"[^a-zA-z0-9.,!?;:()\s]","",text)

def normalize_whitespace(text:str)->str:
    text = re.sub(r"\s"," ",text)
    return text.strip()

def clean_text(raw_text:str)->str:
    if raw_text is None:
        return ""
    text = remove_html(raw_text)
    text = remove_urls(raw_text)
    text = removes_special_characters(raw_text)
    text = normalize_whitespace(raw_text)
    return text
