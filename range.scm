(define range
  (lambda (m n)
    (cond
      ((eq? m n) (quote ()))
      (else (cons m (range (+ m 1) n))))))
