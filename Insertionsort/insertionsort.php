<?php

function insertion_sort($arr)
{
    $sorted = [];
    $min = 2**31 -1;
    for($i=0;$i<count($arr);$i++) {
        for($j=0;$j<count($arr);$j++) {
            if($arr[$j]<$min) {
                $min = $arr[$j];
            }
        }
        $sorted[] = $min;
        $arr[array_search($min, $arr)] = 2**31 - 1;
        $min = 2**31 - 1;
    }
    return $sorted;
}

foreach(insertion_sort([5,3,4,1,2,7,6]) as $num){
    echo $num . ' ';
};