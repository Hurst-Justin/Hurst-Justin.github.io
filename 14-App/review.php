<!DOCTYPE html>
<html>
<head>
    <title>Hurst Analytics</title>
    <script type="text/javascript" src="javascript.js"></script>
</head>

<link rel="stylesheet" href="mystyle.css">
<style>
    table {
        border-collapse: collapse;
        width: 800px;
        column-width: auto;
    }
</style>
<body>

<!-- TopNav -->
<div class="topnav">
  <div class="search-container">
    <form action="https://www.google.com/webhp?search=">
      <input type="text" placeholder="Search.." name="search">
      <button type="submit">Search</button>
    </form>
  </div>
</div>
    
<!-- Sidebar -->
<div class="sidebar"><br>
    <a href="index.html">
       <img src="logo.png" alt="Big Data" width="250">
    </a>
    <div class="block-40">
    <a href="order.html">Order</a> 
</div>
</div>

    
<!-- Inline style -->
<div class="main" style="margin-left:340px;margin-right:40px;padding-bottom: 500px">

  <!-- Header -->
  <div class="header">
    <h1>Order Review</h1>
  </div>        
            
    <!-- PHP -->
      <h2>1. Order Information</h2>
      <?php
        $total = $_POST["total2"];
        $quantity1 = $_POST["quantity1"];
        $quantity2 = $_POST["quantity2"];
        $rush = $_POST["rush"];
        if ($rush == "on") {
            $rush = "Yes - Doubles Rate";         
        }
        else{
            $rush = "No";
        }          

        print "<p><b>Data Consultation:  </b>" . $quantity1 . " x $100/hour</p>";    
        print "<p><b>Spotfire Consultation:  </b>" . $quantity2 . " x $200/hour</p>";
        print "<p><b>Rush:  </b>" . $rush . "</p>";
        print "<p style='color: #009dd9; font-size: 25px;'><b>Total Price:  $" . $total . "</b></p>";

      ?>
    
        <h2>2. Payment Information</h2>
        <?php
            $cardtype = $_POST["cardType"];
            $cardnumber = $_POST["CC"];
            $masked =  str_pad(substr($cardnumber, -4), strlen($cardnumber), '*', STR_PAD_LEFT);
            $expmonth = $_POST["expMonth"];
            $expyear = $_POST["expYear"];
            echo  "<table>";
                echo  "<tr>";
                    echo  "<td>";
                    print "<b>Card Type: </b>" . $cardtype . "";
                    echo  "</td>";
                    echo  "<td>";
                    print "<b>Credit Card Number: </b>" . $masked . "";
                    echo  "</td>";
                    echo  "<td>";
                    print "<b>Expiration Date: </b>" . $_POST["expMonth"] . "/" . $_POST["expYear"] . "";
                    echo  "</td>";
                echo  "</tr>";
            echo  "</table>";
        ?>
        
        <h2>3. Billing Information</h2>
    <?php
        $firstname = $_POST["firstName"];
        $lastname = $_POST["lastName"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $address = $_POST["streetName1"];
        $city = $_POST["city"];
        $state = $_POST["state"];
        $zip = $_POST["zip"];      

        print "<p><b>Name: </b>" . $_POST["firstName"] . " " . $_POST["lastName"] ."</p>";
        print "<p><b>Email: </b>" . $_POST["email"] . "</p>";
        print "<p><b>Telephone: </b>" . $_POST["phone"] . "</p>";
        print "<p><b>Address: </b>" . $_POST["streetName1"] . ", " . $_POST["city"] . ", " . $_POST["state"] . " " . $_POST["zip"] ."</p>";


    ?>

    <form name="reviewForm" action="confirm.php" method="post">
        <section style="display: none">
            <input type="text" name="firstname" value="<?php echo $firstname;?>">
            <input type="text" name="lastname" value="<?php echo $lastname;?>">
            <input type="text" name="email" value="<?php echo $email;?>">
            <input type="text" name="phone" value="<?php echo $phone;?>">
            <input type="text" name="address" value="<?php echo $address;?>">
            <input type="text" name="city" value="<?php echo $city;?>">
            <input type="text" name="statelist" value="<?php echo $state;?>">
            <input type="text" name="zip" value="<?php echo $zip;?>">
            <input type="text" name="cardtype" value="<?php echo $cardtype;?>">
            <input type="text" name="cardnumber" value="<?php echo $cardnumber;?>">
            <input type="text" name="expmonth" value="<?php echo $expmonth;?>">
            <input type="text" name="expyear" value="<?php echo $expyear;?>">
            <input type="text" name="quantity1" value="<?php echo $quantity1;?>">
            <input type="text" name="quantity2" value="<?php echo $quantity2;?>">
            <input type="text" name="rush" value="<?php echo $rush;?>">
        </section>
        <table>
            <tr>
                <td>
                    <input type="submit" class="button2"name="confirm" value="Confirm">
                </td>
                <td>
                    <input type="submit" class="button1"name="cancel" value="Cancel">
                </td>
            </tr>
        </table>
    </form>

    </div>
  </body>
</html>
