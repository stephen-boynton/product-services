# Use the official Golang image.
FROM golang:1.22 as builder

# Set the Current Working Directory inside the container.
WORKDIR /app

# Copy go mod and sum files.
COPY go.mod go.sum ./
RUN go mod download

# Copy the source code into the container.
COPY . .

# Install Air for hot reloading. Use go install to avoid deprecation issues with go get.
RUN go install github.com/cosmtrek/air@latest


# Expose port 8080 to the outside world.
EXPOSE 8000

# Command to run the application using Air for hot reloading.
CMD ["air"]
