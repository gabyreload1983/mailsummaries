# Sending Mail Summaries

This is an application that looks for customers with a debit balance.
Export the account summary to an excel file and then send it by email.

## Create a .env file in root with the next variables

Complete with the correct data.

URBANO_HOST=urbanoHost
URBANO_DB=urbanoDb
URBANO_PASS=urbanoPass
URBANO_USER=urbanoUser
MAIL_HOST=host.com
MAIL_USER=from@from.com.ar
MAIL_PASSWORD=password
MAIL_FROM=from@from.com.ar
MAIL_INFO=info@info.com
MAIL_CC=copy@copy.com
FILE_PATH_PREFIX=/path/to/summaries/
INDEX_DEBTOR=500
EXCLUDE_CUSTOMERS=[]

# URBANO VARIABLES

To connect to a mysql data base

# MAIL VARIABLES

To connect to a smtp server

# FILE_PATH_PREFIX VARIABLE

This is where the excel files are stored

# INDEX_DEBTOR VARIABLE

Minimum debit balance index

# EXCLUDE_CUSTOMERS VARIABLE

Array with customer codes to exclude
Example:

EXCLUDE_CUSTOMERS=["00345","89745"]
