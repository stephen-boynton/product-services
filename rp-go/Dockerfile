# Use the official Golang image.
FROM golang:1.22 as builder

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN go install github.com/cosmtrek/air@latest

EXPOSE 8000

# Command to run the application using Air for hot reloading.
CMD ["air"]
