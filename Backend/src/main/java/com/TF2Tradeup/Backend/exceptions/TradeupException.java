package com.TF2Tradeup.Backend.exceptions;

public class TradeupException extends RuntimeException {

    public TradeupException() {
    }

    public TradeupException(Throwable cause) {
        super(cause);
    }

    public TradeupException(String message) {
        super(message);
    }

    public TradeupException(String message, Throwable cause) {
        super(message, cause);
    }

    public TradeupException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
