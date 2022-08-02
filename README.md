# Covid19-Sentiment-Analysis of Unlabelled Tweets
## Introduction
Sentiment analysis is the process of determining whether a piece of writing is positive, negative, or neutral. Sentiment Analysis is a Natural Language Processing technique. A branch of linguistics, computer science, and artificial intelligence called "natural language processing" (NLP) studies how computers and human language interact, with a focus on how to train computers to process and analyse massive volumes of natural language data.
The ultimate goal is to create a machine that is able to "understand" the contents of documents, including the subtle subtleties of language used in different contexts.
Once the information and insights are accurately extracted from the documents, the technology can classify and arrange the documents themselves. [Read More](https://en.wikipedia.org/wiki/Natural_language_processing)


## Getting Started
Create new virtual env and activate it.
Then open the terminal.
```python
  pip install -r requirements.txt
  cd server
  flask run
```
Open app folder and double-click index.html and enjoy the app.

## Problem-Statement:
The topic of Covid-19 is covered in a sizable corpus of tweets on Twitter. We wish to categorise how many people have good and negative views about the COVID-19 epidemic. 


## Solution :
1. We download Twitter's raw tweets into our system. [Hydrate Tweets](https://towardsdatascience.com/learn-how-to-easily-hydrate-tweets-a0f393ed340e)
2. We must clean and preprocess tweets before using it.
3. Than Tweet features can be extracted using the tf-idf vectorizer.
4. Since the data is unlabeled, we must somehow label it in order to use semisupervised learning. Go to the [notebook.](https://github.com/rohit-khoiwal-30/Covid19-Sentiment-Analysis/blob/master/Sentiment_Analysis.ipynb)
5. After labelling, we extract features using countvectorizer from Sklearn.
6. For classification, we employ a naïve bayes classifier. 

# Conclusion:
Using an unsupervised learning technique, we labelled the data and classified based on that. Because we trained the model on 1 lakh tweets, we obtained quite decent accuracy but had a few small mistakes in identifying tweets. 

# Refernces:
1. We make use of a github repository's dataset. [Here](https://github.com/thepanacealab/covid19_twitter)
2. Preprocessing and Feature Extraction. [Here](https://towardsdatascience.com/twitter-sentiment-analysis-classification-using-nltk-python-fa912578614c)
