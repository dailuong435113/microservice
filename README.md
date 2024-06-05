# Project README

## Introduction

This project is a comprehensive web application designed to manage various entities such as orders, products, and users. It leverages modern technologies to ensure efficient and scalable management of these entities. The application includes several components, each responsible for different aspects of the system's functionality.

## Project Structure

The project is organized into several directories and files, each serving a specific purpose:

- **order_manage/**: Contains all the files and code related to managing orders.
- **product_manage/**: Contains all the files and code related to managing products.
- **product_manage1/**: An alternative or backup directory for managing products.
- **test_sequen1/**: Contains test sequences and related files.
- **user_manage/**: Contains all the files and code related to managing users.
- **user_manage copy/**: A backup or duplicate of the user management directory.
- **category.html**: HTML file for category management.
- **docker-compose.yml**: Docker Compose file for setting up and running the application in a Docker environment.
- **index.html**: The main HTML file for the application's homepage.
- **order.html**: HTML file for order management.
- **product.html**: HTML file for product management.

## Getting Started

### Prerequisites

Before running the application, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started) (for containerization)
- [Node.js](https://nodejs.org/) (for running the backend services)
- [npm](https://www.npmjs.com/) (Node package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Set up and run the application using Docker:
   ```bash
   docker-compose up
   ```

### Running Migrations

To run the database migrations, navigate to the `test_sequen1` directory and execute the following command:
```bash
cd test_sequen1
npx sequelize-cli db:migrate
```

## Usage

The application can be accessed via a web browser. The main features include:

- **Order Management**: Create, update, and view orders.
- **Product Management**: Add, edit, and list products.
- **User Management**: Manage user accounts and their details.
- **Category Management**: Organize products into categories.

## Contributing

If you wish to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Description of the changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

For any inquiries or issues, please contact the project maintainer at [dai435113@gmail.com].

---

This README provides an overview of the project, including its structure, setup instructions, and usage guidelines. If you have any questions or need further assistance, feel free to reach out.
