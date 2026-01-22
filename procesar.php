<?php
header('Content-Type: application/json');

// Leer datos JSON enviados por fetch
$data = json_decode(file_get_contents("php://input"), true);

// Validación
if (!isset($data['text']) || strlen(trim($data['text'])) < 3) {
    echo json_encode([
        'success' => false,
        'message' => 'Texto inválido'
    ]);
    exit;
}

// Procesamiento "backend"
$text = strtoupper(trim($data['text']));

// Respuesta
echo json_encode([
    'success' => true,
    'message' => 'Has escrito: "' . $text . '"'
]);
