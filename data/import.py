import csv
import json
import uuid

# Read the CSV data from the file
with open("data.csv", "r") as csv_file:
    csv_reader = csv.reader(csv_file)
    data = [{"guid": str(uuid.uuid4()) ,"year": int(row[0]), "event": row[1]} for row in csv_reader]

# Convert to JSON
json_data = json.dumps(data, indent=4)

# Write to a JSON file
with open("timeline.json", "w") as json_file:
    json_file.write(json_data)