# Sending Mail Summaries

This is an application that looks for customers with a debit balance.
Export the account summary to an excel file and then send it by email.

## Complete the .env file with the correct data.

### URBANO VARIABLES

To connect to a mysql data base

### MAIL VARIABLES

To connect to a smtp server

### FILE_PATH_PREFIX VARIABLE

This is where the excel files are stored

### INDEX_DEBTOR VARIABLE

Minimum debit balance index

### EXCLUDE_CUSTOMERS VARIABLE

Array with customer codes to exclude
Example:

EXCLUDE_CUSTOMERS=["00345","89745"]
