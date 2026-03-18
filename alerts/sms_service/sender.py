"""
SMS Alert Sender - Africa's Talking Integration
Cheaper than Twilio for Nigeria
"""

import africastalking
import os
from dotenv import load_dotenv

load_dotenv()

africastalking.initialize(
    os.getenv('AFRICAS_TALKING_USERNAME'),
    os.getenv('AFRICAS_TALKING_API_KEY')
)

sms = africastalking.SMS

def send_price_alert(phone: str, commodity: str, change_pct: float, 
                     current: float, predicted: float) -> bool:
    """Send SMS price alert"""
    
    direction = 'rise' if change_pct > 0 else 'fall'
    
    message = (
        f"EconoScope: {commodity.upper()} to {direction} "
        f"{abs(change_pct):.0f}% in 7 days. "
        f"Now: N{current:,.0f} -> N{predicted:,.0f}. "
        f"Reply STOP to unsubscribe."
    )[:160]
    
    try:
        response = sms.send(message, [phone])
        print(f"✅ SMS sent to {phone}")
        return True
    except Exception as e:
        print(f"❌ SMS error: {e}")
        return False

if __name__ == "__main__":
    # Test
    send_price_alert("+2348000000000", "rice", 15.0, 85000, 97750)
