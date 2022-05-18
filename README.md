# Covid19-Sentiment-Analysis of Unlabelled Tweets
## Introduction
This is Sentiment Analysis problem of Natural Language Processing. Natural language processing (NLP) is a subfield of linguistics, computer science, and artificial intelligence concerned with the interactions between computers and human language, in particular how to program computers to process and analyze large amounts of natural language data. The goal is a computer capable of "understanding" the contents of documents, including the contextual nuances of the language within them. The technology can then accurately extract information and insights contained in the documents as well as categorize and organize the documents themselves. [Read More](https://en.wikipedia.org/wiki/Natural_language_processing)


## Problem-Statement:
There are vast corpus of tweets available on twitter of Covid-19 subject. We want to classify that how many number of people are positive and negative about Covid-19 pandemic.


## Solution :
1. We have raw tweets that we hydrate from twitter. [Hydrate Tweets](https://towardsdatascience.com/learn-how-to-easily-hydrate-tweets-a0f393ed340e)
2. Before using tweets we need to preprocess the tweets and clean it. ![](preprocess.png) 
3. Than Extract Features from tweets by tf-idf vectorizer
4. We have unlabelled data,so somehow we need to label the data for semisupervised learning go to the [notebook.](https://github.com/rohit-khoiwal-30/Covid19-Sentiment-Analysis/blob/master/Sentiment_Analysis.ipynb)
5. After labelling, we use countvectorizer from sklearn for feature extraction.
6. We use naive bayes classifier for classification 

# Conclusion:
We labelled the data using unsupervised learning method and classify based on that. We got pretty good accuracy but have minor errors in classifying tweets of Kmean algorithm.
and trained on small corpus of data.

# Refernces:
1. Dataset we use from a github [repo.](https://github.com/thepanacealab/covid19_twitter)
2. Preprocessing and Feature Extraction. [Here](https://towardsdatascience.com/twitter-sentiment-analysis-classification-using-nltk-python-fa912578614c)
