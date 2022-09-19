import cv2
cap = cv2.VideoCapture(0)

counter = 50*3
while True:

    _, img = cap.read()
    cv2.imshow("frame", img)


    counter -= 1

    if cv2.waitKey(1) == 27 & 0xFF == ord('q'):
        break
    elif counter == 0:
        cv2.imwrite("person_sample2.png", img)
        break

cap.release()
cv2.destroyAllWindows()
