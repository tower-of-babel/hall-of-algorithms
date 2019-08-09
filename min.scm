;; takes a list of atoms and returns the minimum one
(define min
  (lambda (lat)
    (cond
      ((null? lat) (quote ()))
      (else
        (cond
          ((null? (cdr lat)) (car lat))
          ((< (car lat) (car (cdr lat))) (min (cons (car lat) (cdr (cdr lat)))))
          (else (min (cdr lat))))))))
; (min '(3 4 -10 0 -1)) returns -10
