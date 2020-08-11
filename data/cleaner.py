import pandas as pd
df = pd.read_csv('global_temp.csv', sep=',')

out = df[df['date'].str.contains('06-01')]
print(out)

out.to_csv('temp_clean.csv', sep=',', encoding='utf-8', index=False)