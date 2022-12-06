<?php

$id = '1';
$question ='ああああああお';

$answers = [
  'A' => 'あああ',
  'B' => 'いいい',
  'C' => 'ううう',
  'D' => 'えええ',
];

$correctAnswer = 'B';
$correctAnswerValue = $answers[$correctAnswer];
$explanation = '解説解説';

include __DIR__.'/../template/question.tpl.php';