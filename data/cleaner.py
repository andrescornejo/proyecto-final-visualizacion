import pandas as pd
# Set the filename
filename = 'global_temps.csv'

# Convert csv to DataFrame
df = pd.read_csv('master_global_temps.csv', sep=',')

# Set the range of the years to be filtered out
for i in range(1700, 1980):
    df = df[~df['date'].str.contains(str(i))]

# Filter the table with only the first of june of every year.
out = df[df['date'].str.contains('06-01')]

out.to_csv(filename, sep=',', encoding='utf-8', index=False)