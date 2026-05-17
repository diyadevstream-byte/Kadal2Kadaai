<?php
$products = App\Models\Product::getProductsByLocation(13.0827, 80.2707);
foreach($products as $p) {
    echo $p->id . " - " . $p->title . "\n";
}
