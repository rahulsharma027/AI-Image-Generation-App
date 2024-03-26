from flask import Flask, request, jsonify
from flask_cors import CORS
from pipeline.cloud.pipelines import run_pipeline
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


@app.route('/endpoint', methods=['POST'])
def process_prompt():
    data = request.get_json()
    prompt = data.get('prompt', '')
    
    # Do something with the prompt (e.g., process it) and generate a response

    output = run_pipeline(
	#pipeline pointer or ID
	"stabilityai/stable-diffusion:v5",
	#:Prompt
	prompt,
	#:Model kwargs
	dict(
		height = 512,
		num_images_per_prompt = 1,
		num_inference_steps = 4,
		strength = 0.8,
		width = 512,
	),
	async_run = False,
)

    json_data=output.outputs_formatted()

    url = json_data[0][0].get('file', {}).get('url', None)
    response = url
    if url is not None:
      return jsonify({'response': response})
    else:
      print("URL not found in the structure.")


if __name__ == '__main__':
    app.run(debug=True)