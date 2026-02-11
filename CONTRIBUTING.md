# Contributing to n8n-nodes-tiendanube-integration

Thank you for your interest in contributing to this n8n community node!

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/)
- [n8n](https://n8n.io/) installed globally or locally for testing.

## Development Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/n8n-nodes-tiendanube.git
    cd n8n-nodes-tiendanube
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Build the node:**
    ```bash
    npm run build
    ```

4.  **Link to n8n:**
    To test your node locally with n8n, you can link it:
    ```bash
    npm link
    cd /path/to/your/n8n/installation/nodes
    npm link n8n-nodes-tiendanube-integration
    ```
    *Alternatively, copy the `dist` folder to your n8n custom nodes directory (`~/.n8n/custom`).*

5.  **Start n8n:**
    ```bash
    n8n start
    ```

## Project Structure

- `nodes/`: Contains the source code for the nodes.
- `credentials/`: Contains the credential definitions.
- `package.json`: Project metadata and dependencies.
- `tsconfig.json`: TypeScript configuration.

## Development Workflow

1.  Make your changes in the `nodes/` or `credentials/` directories.
2.  Run `npm run build` to compile the TypeScript code.
3.  Restart your n8n instance to verify the changes.
4.  Run `npm run lint` to ensure code style compliance.

## Submitting a Pull Request

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix: `git checkout -b my-feature`.
3.  Commit your changes with descriptive messages.
4.  Push your branch: `git push origin my-feature`.
5.  Open a Pull Request on GitHub describing your changes.

## License

By contributing, you agree that your contributions will be licensed under the MIT License of this project.
