from website import create_app

app = create_app()

if __name__ == '__main__':
    app.run(host='10.10.11.2', port=3000, debug=True)
