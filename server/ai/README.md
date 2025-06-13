# Custom AI Service

This is a custom AI service implementation that provides neural network-based text generation and processing capabilities without relying on third-party AI services.

## Features

- Custom neural network implementation
- Text preprocessing and vectorization
- Word embeddings generation
- Model training and evaluation
- REST API for easy integration
- Experiment tracking and model versioning
- Configurable architecture and hyperparameters

## Directory Structure

```
ai/
├── core/
│   ├── neural_network.py    # Neural network implementation
│   ├── data_processor.py    # Text processing and vectorization
│   └── ai_service.py        # Main AI service
├── config/
│   └── config.py           # Configuration management
├── utils/
│   └── helpers.py          # Utility functions
├── data/                   # Data storage
├── models/                 # Saved models
├── logs/                   # Log files
├── experiments/            # Experiment results
├── api.py                  # REST API
├── train.py               # Training script
└── requirements.txt       # Python dependencies
```

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Usage

### Training a Model

1. Prepare your training data in JSON format:
```json
[
    {
        "text": "Your training text here",
        "metadata": {
            "source": "source_name",
            "category": "category_name"
        }
    }
]
```

2. Train the model:
```bash
python train.py --data path/to/training_data.json --config path/to/config.json --name experiment_name
```

### Running the API

1. Start the API server:
```bash
python api.py
```

2. The API will be available at `http://localhost:5000` with the following endpoints:

- `POST /api/ai/initialize` - Initialize new model
- `POST /api/ai/train` - Train model
- `POST /api/ai/generate` - Generate text
- `POST /api/ai/evaluate` - Evaluate model
- `POST /api/ai/save` - Save model
- `GET /api/ai/info` - Get model information

### Example API Usage

```python
import requests

# Initialize model
response = requests.post('http://localhost:5000/api/ai/initialize', json={
    'vocab_size': 10000,
    'embedding_dim': 300,
    'hidden_sizes': [256, 128],
    'learning_rate': 0.001
})

# Train model
response = requests.post('http://localhost:5000/api/ai/train', json={
    'texts': ['Your training texts here'],
    'epochs': 100,
    'batch_size': 32
})

# Generate text
response = requests.post('http://localhost:5000/api/ai/generate', json={
    'text': 'Input text here',
    'max_length': 100,
    'temperature': 0.7
})
```

## Configuration

The service can be configured through a JSON configuration file:

```json
{
    "vocab_size": 10000,
    "embedding_dim": 300,
    "hidden_sizes": [256, 128],
    "learning_rate": 0.001,
    "batch_size": 32,
    "epochs": 100,
    "validation_split": 0.1,
    "early_stopping_patience": 5,
    "min_delta": 0.001,
    "max_sequence_length": 100,
    "temperature": 0.7,
    "min_word_frequency": 2,
    "use_stemming": true,
    "use_lemmatization": true,
    "remove_stopwords": true,
    "save_best_only": true,
    "save_frequency": 10
}
```

## Model Architecture

The service uses a custom neural network architecture:

1. Input Layer: Word embeddings
2. Hidden Layers: Configurable number of layers with ReLU activation
3. Output Layer: Softmax for word prediction
4. Features:
   - Dropout for regularization
   - Batch normalization
   - Early stopping
   - Learning rate scheduling
   - Momentum optimization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 