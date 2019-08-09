(define max
  (lambda (lat)
    (cond
      ((null? lat) (quote ()))
      ((null? (cdr lat)) (car lat))
      ((> (car lat) (car (cdr lat))) (max (cons (car lat) (cdr (cdr lat)))))
      (else (max (cdr lat))))))
