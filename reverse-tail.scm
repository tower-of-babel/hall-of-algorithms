;; can be written with a helper function
(define reverse
  (lambda (l)
    (reverse-aux l (quote ()))))

(define reverse-aux
  (lambda (l acc)
    (cond
      ((null? l) acc)
      (else (reverse (cdr l) (cons (car l) acc))))))

; (reverse '(7 5 1 3)) => (3 1 5 7)
