from flask import Flask
from flask import render_template
#import telebot 

TOKEN = '2109918986:AAGoz-c4sw5zjtDeq9C2875GiV_4S4rQya4' 
#bot = telebot.TeleBot(TOKEN) 
app = Flask(__name__) 
#app = Flask(__name__)

#@bot.message_handler(commands=['start']) 
#def start(message):
  #bot.reply_to(message, 'Hello, ' + message.from_user.first_name) 
 
#@bot.message_handler(func=lambda message: True, content_types=['text']) 
#def echo_message(message):
  #bot.reply_to(message, message.text) 
  
  
#@app.route('/' + TOKEN, methods=['POST']) 
#def getMessage(): 
  #json_string = request.get_data().decode('utf-8') 
  #update = telebot.types.Update.de_json(json_string) 
  #bot.process_new_updates([update]) 
  #return "!", 200 
  
  
#@app.route("/") 
#def webhook(): 
  #bot.remove_webhook() 
  #bot.set_webhook(url='https://your_heroku_project.com/' + TOKEN) 
  #return "!", 200


@app.route("/")
def hello_world():
  #return "kahsj djdk"
  return render_template("index.html")

#bot.polling()

#if __name__ == "__main__":
  #print("okay")
  #app.run()
  #print("okay1")
  #bot.polling()
  #app.run(host="0.0.0.0",port=int(os.environ.get('PORT',5000))) 
