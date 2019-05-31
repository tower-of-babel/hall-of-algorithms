(defun reverse (l acc)
  (cond
     ((null l) acc)
     (t (reverse (cdr l) (cons (car l) acc)))))


; (reverse '(7 5 1 3)) => (3 1 5 7)
