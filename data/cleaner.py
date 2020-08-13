import pandas as pd
# Set the filename
filename = 'data.csv'

# Convert csv to DataFrame
df = pd.read_csv(r'MASTER.csv', sep=',')
# Filter the table with only the first of june of every year.
df = df[df['date'].str.contains('-06-01')]
df = df.replace({'-06-01': ''}, regex=True)

print("Cleaning file to amount of years specified.")
# Set the range of the years to be filtered
for i in range(1700, 1980):
    print(str(i))
    df = df[~df['date'].str.match(str(i))]
print("Year cleaning complete.")


df.to_csv(filename, sep=',', encoding='utf-8', index=False)