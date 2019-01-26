(defun last-of(lst)
  (if (null (cdr lst))
      lst
    (last-of (cdr lst))))

; (last-of '(1 3 4)) => (4)
