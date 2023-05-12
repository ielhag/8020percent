import json


def handler(event, context):
    print(event)
    customerId = event['pathParameters']['customerId']
    customer = {'customerId': customerId, 'customerName': "Customer " + customerId}
    response = {
        'statusCode': 200,
        # uncomment below to enable CORS requests
        'headers': {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        'body': json.dumps(customer)
    }

    return response
