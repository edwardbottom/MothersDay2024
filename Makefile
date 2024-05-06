build:
	docker build -t mothers-day-website:react .

run:
	docker run -p 8080:80 my-react-app
