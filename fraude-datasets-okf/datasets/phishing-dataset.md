---
type: Dataset
title: Phishing Dataset
description: Dataset containing benign and phishing textual samples for binary classification.
resource: ../raw/phishing-dataset/texts.json

tags:
  - phishing
  - cybersecurity
  - text-classification
  - spam
  - scam-detection

task: binary-classification

labels:
  0: benign
  1: phishing

data_fields:
  - text
  - label

source:
  name: ealvaradob/phishing-dataset
  platform: Hugging Face
---

# Phishing Dataset

This dataset contains textual samples labeled as either benign or phishing.

## Data Structure

Each entry contains two main fields:

- `text`: the textual content being analyzed
- `label`: the classification assigned to the content

## Labels

- `0`: benign content
- `1`: phishing content

## Intended Use

The dataset can be used for machine learning and natural language processing
tasks involving phishing detection and binary text classification.

## Local Resource

The original data used by this knowledge entry is stored at:

`../raw/phishing-dataset/texts.json`

## Source

The dataset is distributed through Hugging Face under the repository
`ealvaradob/phishing-dataset`.
