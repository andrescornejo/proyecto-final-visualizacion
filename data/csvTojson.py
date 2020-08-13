import pandas as pd
import json

# This program assumes the csv file has a header. 
# In case of missing header in the csv file, we have to pass it explicitly to the program

csv_file = pd.DataFrame(pd.read_csv("global_temp.csv", sep = ",", header = 0, index_col = False))
csv_file.to_json("global_temp.json", orient = "records", date_format = "epoch", double_precision = 10, force_ascii = True, date_unit = "ms", default_handler = None)

#df = pd.read_csv (r'city_temperature.csv')
#print(df)


json_file = open(r'global_temp.json')
parsed = json.load(json_file)

with open('global_temp.json', 'w') as f:
    f.writelines(json.dumps(parsed, indent=4, sort_keys=True))