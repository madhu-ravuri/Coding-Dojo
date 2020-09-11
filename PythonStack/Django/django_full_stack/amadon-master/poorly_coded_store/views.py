from django.shortcuts import render, redirect
from .models import Order, Product

def index(request):
    context = {
        "all_products": Product.objects.all()
    }
    return render(request, "store/index.html", context)

def checkout(request):
    order_we_just_made = Order.objects.last()

    total_quantity = 0
    total_money_spent = 0
    for order in Order.objects.all():
        total_quantity += order.quantity_ordered
        total_money_spent += order.total_price

    context = {
        'order_charge' : order_we_just_made.total_price,
        'total_quantity' : total_quantity,
        'total_price' : total_money_spent,
    }
    
    return render(request, "store/checkout.html", context)

def process_form(request):
    quantity_from_form = int(request.POST["quantity"])
    item_bought = Product.objects.get(id=request.POST['price'])
    price_from_form = item_bought.price
    # price_from_form = float(request.POST["price"])
    total_charge = quantity_from_form * price_from_form
    print("Charging credit card...")
    Order.objects.create(quantity_ordered=quantity_from_form, total_price=total_charge)

    return redirect("/checkout")