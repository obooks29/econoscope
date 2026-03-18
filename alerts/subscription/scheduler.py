"""
Celery Beat Scheduler - Daily price check and alerts
"""

from celery import Celery
from celery.schedules import crontab
import os
from dotenv import load_dotenv

load_dotenv()

app = Celery('econoscope', broker=os.getenv('REDIS_URL', 'redis://localhost:6379'))

@app.on_after_configure.connect
def setup_periodic_tasks(sender, **kwargs):
    # Run daily at 6 AM WAT
    sender.add_periodic_task(
        crontab(hour=6, minute=0),
        check_and_send_alerts.s(),
    )

@app.task
def check_and_send_alerts():
    """Check price forecasts and send alerts"""
    print("Checking price forecasts...")
    
    # In production: query database for subscriptions
    # and call price forecast API
    
    return "Alerts checked"

if __name__ == "__main__":
    app.start()
