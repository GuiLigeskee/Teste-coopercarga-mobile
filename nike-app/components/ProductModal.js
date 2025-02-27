import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const ProductModal = ({ product, onClose }) => {
  return (
    <Modal visible={!!product} transparent={true} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Image
            source={{ uri: product.image_url }}
            style={styles.modalImage}
            resizeMode="contain"
          />
          <Text style={styles.modalName}>{product.name}</Text>
          <Text style={styles.modalPrice}>R$ {product.price.toFixed(2)}</Text>

          {product.available_sizes.length > 0 ? (
            <Text style={styles.modalSizes}>
              Tamanhos disponíveis: {product.available_sizes.join(", ")}
            </Text>
          ) : (
            <Text style={styles.modalSizesAlt}>
              Produto não disponível no momento
            </Text>
          )}
          <Text style={styles.modalDetails}>{product.details}</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: width * 0.85,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  modalImage: {
    width: "100%",
    borderRadius: 8,
    height: height * 0.4,
  },
  modalName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
    textAlign: "center",
  },
  modalPrice: {
    fontSize: 18,
    color: "#888",
    marginTop: 8,
    textAlign: "center",
  },
  modalSizes: {
    fontWeight: "bold",
    margin: 10,
  },
  modalSizesAlt: {
    fontWeight: "bold",
    color: "#FF0000",
    margin: 10,
  },
  modalDetails: {
    fontSize: 16,
    marginTop: 16,
    textAlign: "center",
  },
  closeButton: {
    marginTop: 16,
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ProductModal;
