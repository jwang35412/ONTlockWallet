import { PrivateKey, PublicKey, Signable, SignatureScheme } from '../crypto';
import { StringReader } from '../utils';
/**
 * Signature generated by signing transaction hash with Private Keys.
 */
export declare class TxSignature {
    /**
     * Deserializes hex representation to Transaction Signature
     *
     * @param sr Hex string reader
     */
    static deserialize(sr: StringReader): TxSignature;
    /**
     * Creates Transaction signature of hash with supplied private key and scheme.
     *
     * If the signature schemas is not provided, the default schemes for the key types are used.
     *
     * @param hash hash of the transaction or signable transaction
     * @param privateKey Private key to use
     * @param scheme Signature scheme to use
     */
    static create(hash: string | Signable, privateKey: PrivateKey, scheme?: SignatureScheme): TxSignature;
    /**
     * Creates Transaction signature of hash with supplied private key and scheme asynchroniously.
     *
     * If the signature schemas is not provided, the default schemes for the key types are used.
     *
     * @param hash hash of the transaction or signable transaction
     * @param privateKey Private key to use
     * @param scheme Signature scheme to use
     */
    static createAsync(hash: string | Signable, privateKey: PrivateKey, scheme?: SignatureScheme): Promise<TxSignature>;
    /**
     * Public keys used to create this signature.
     */
    pubKeys: PublicKey[];
    M: number;
    sigData: string[];
    /**
     * Serializes signature to Hex representation.
     *
     */
    serialize(): string;
}
