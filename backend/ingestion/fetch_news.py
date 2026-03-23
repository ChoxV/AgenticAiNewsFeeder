import feedparser

RSS_FEEDS = [
        "https://techcrunch.com/feed/",
        "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
        "https://feeds.bbci.co.uk/news/world/rss.xml"
    ]

def fetch_news():

        articles = []   # must be a list

        for feed in RSS_FEEDS:

            parsed = feedparser.parse(feed)

            for entry in parsed.entries:

                article = {
                    "title": entry.title,
                    "link": entry.link,
                    "summary": entry.summary
                }

                articles.append(article)

        return articles


"""if __name__ == "__main__":
        articles = fetch_news()
        print(articles[:3])"""