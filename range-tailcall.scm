;; tail call recursive
(define range
  (lambda (m n)
    (range-aux m n (quote ()))))

(define range-aux
  (lambda (m n acc)
    (cond
      ((eq? m n) acc)
      (else (range-aux m (- n 1) (cons (- n 1) acc))))))
; (range 4 9) returns (4 5 6 7 8)
