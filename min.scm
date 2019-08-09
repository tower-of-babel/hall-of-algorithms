    
(define min
  (lambda (lat)
    (cond
      ((null? lat) (quote ()))
      (else
        (cond
          ((null? (cdr lat)) (car lat))
          ((< (car lat) (car (cdr lat))) (min (cons (car lat) (cdr (cdr lat)))))
          (else (min (cdr lat))))))))
