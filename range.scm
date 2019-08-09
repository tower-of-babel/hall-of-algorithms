(define range
  (lambda (m n)
    (cond
      ((eq? m n) (quote ()))
      (else (cons m (range (+ m 1) n))))))
; (range 4 9) returns (4 5 6 7 8 9)
