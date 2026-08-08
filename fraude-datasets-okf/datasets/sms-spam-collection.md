---
type: Dataset
title: SMS Spam Collection
description: Collection of SMS messages labeled as legitimate or spam.
resource: ../raw/sms-spam-collection/spam.csv

tags:
  - sms
  - spam
  - text-classification
  - scam-detection

task: binary-classification

labels:
  ham: legitimate message
  spam: spam message

data_fields:
  v1: message label
  v2: message text

source:
  name: SMS Spam Collection
---

# SMS Spam Collection

The SMS Spam Collection is a dataset containing SMS messages classified
as either legitimate messages (`ham`) or unwanted messages (`spam`).

## Data Structure

The relevant fields in the CSV file are:

- `v1`: classification of the message
- `v2`: original SMS message

The CSV also contains the columns `Unnamed: 2`, `Unnamed: 3`, and
`Unnamed: 4`. These columns do not contain relevant information and
should be ignored.

## Labels

- `ham`: legitimate SMS message
- `spam`: unwanted or spam SMS message

## Intended Use

The dataset can be used for tasks involving SMS spam detection
and binary text classification.

## Local Resource

The dataset is stored locally at:

`../raw/sms-spam-collection/spam.csv`

## Source

The SMS Spam Collection is available through multiple distributions,
including Kaggle and Unicamp.
