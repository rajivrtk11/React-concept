static String BalancedString(int N) {
    // code here
    String s = 'abcdefghijklmnopqrstuvwxyz';
    String rs = 'zyxwvutsrqponmlkjihgfedcba';

    StringBuilder sb = new StringBuilder();
    int temp = N, sumOfn = 0;
    while(temp > 0){
        sumOfn += temp%10;
        temp /= 10;
    }

    if(N <= 52) {
        if(n%2 == 0){
            sb.append(s.substring(0,N/2));
            sb.append(rs.substring(0, N/2));
        }
        else if( sumOfn%2 == 0){
            sb.append(s.substring(0,(N+1)/2));
            sb.append(rs.substring(0, (N-1)/2));
        }
        else if(sumOfn%2 != 0) {
            sb.append(s.substring(0,(N-1)/2));
            sb.append(rs.substring(0, (N+1)/2));
        }
    }
    else {
        if(n%2 == 0){
            int evenLen = N/2;
            int oddLen = N/2;

            while(evenLen > 26){
                sb.append(s.substring(0,26));
                evenLen -= 26;
            }
            sb.append(s.substring(0,evenLen));

            while(oddLen > 26){
                sb.append(rs.substring(0,26));
                oddLen -= 26;
            }
            sb.append(rs.substring(0, oddLen));
        }
        else if( sumOfn%2 == 0){
            int evenLen = (N + 1)/2;
            int oddLen = (N - 1)/2;

            while(evenLen > 26){
                sb.append(s.substring(0,26));
                evenLen -= 26;
            }
            sb.append(s.substring(0,evenLen));

            while(oddLen > 26){
                sb.append(rs.substring(0,26));
                oddLen -= 26;
            }
            sb.append(rs.substring(0, oddLen));
        }
        else if(sumOfn%2 != 0) {
            int evenLen = (N - 1)/2;
            int oddLen = (N + 1)/2;

            while(evenLen > 26){
                sb.append(s.substring(0,26));
                evenLen -= 26;
            }
            sb.append(s.substring(0,evenLen));

            while(oddLen > 26){
                sb.append(rs.substring(0,26));
                oddLen -= 26;
            }
            sb.append(rs.substring(0, oddLen));
        }

    }
    return sb.toString();
}