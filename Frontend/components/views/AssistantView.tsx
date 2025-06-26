import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { Bot, User } from 'lucide-react-native';

const HARDCODED_AI_RESPONSE =
  "I'm your AI assistant! How can I help you today? (This is a placeholder response.)";

type Message = {
  id: string;
  sender: 'user' | 'ai';
  text: string;
};

export default function AssistantView() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'ai', text: HARDCODED_AI_RESPONSE },
  ]);
  const [input, setInput] = useState('');
  const flatListRef = useRef<FlatList<Message>>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: HARDCODED_AI_RESPONSE,
      };
      setMessages((prev) => [...prev, aiMsg]);
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 600);
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  const renderItem = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.bubbleRow,
        item.sender === 'user' ? { justifyContent: 'flex-end' } : { justifyContent: 'flex-start' },
      ]}
    >
      {item.sender === 'ai' && (
        <View style={styles.avatar}><Bot color="#3B82F6" size={20} /></View>
      )}
      <View
        style={[
          styles.bubble,
          item.sender === 'user' ? styles.userBubble : styles.aiBubble,
        ]}
      >
        <Text style={item.sender === 'user' ? styles.userText : styles.aiText}>{item.text}</Text>
      </View>
      {item.sender === 'user' && (
        <View style={styles.avatar}><User color="#3B82F6" size={20} /></View>
      )}
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={80}
    >
      {/* Sticky Header */}
      <View style={styles.header}>
        <Bot color="#3B82F6" size={24} />
        <Text style={styles.headerTitle}>AI Assistant</Text>
      </View>
      {/* Chat Area */}
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatContainer}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
        style={{ flex: 1 }}
      />
      {/* Input Bar */}
      <View style={styles.inputBar}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type your message..."
          placeholderTextColor="#9CA3AF"
          onSubmitEditing={handleSend}
          returnKeyType="send"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginLeft: 8,
  },
  chatContainer: {
    padding: 16,
    paddingBottom: 24,
  },
  bubbleRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  bubble: {
    maxWidth: '75%',
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  userBubble: {
    backgroundColor: '#3B82F6',
    marginLeft: 40,
  },
  aiBubble: {
    backgroundColor: '#F3F4F6',
    marginRight: 40,
  },
  userText: {
    color: 'white',
    fontSize: 16,
  },
  aiText: {
    color: '#1F2937',
    fontSize: 16,
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    marginRight: 8,
    color: '#1F2937',
  },
  sendButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 