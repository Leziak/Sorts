<?php

//PHP is not so cool.

function bubble_sort($arr)
{
    for($i=0;$i<count($arr);$i++) {
        for($j=0;$j<count($arr);$j++) {
            if($arr[$j]>$arr[$j+1]) {
                $temp = $arr[$j];
                $arr[$j] = $arr[$j+1];
                $arr[$j+1] = $temp;
            }
        }
    }
    return $arr;
}

foreach(bubble_sort([5,3,4,1,2,7,6]) as $num){
    echo $num . ' ';
};