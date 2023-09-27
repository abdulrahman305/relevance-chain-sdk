/** eslint-disable */
/**
 * 
 * DON'T EDIT THIS FILE MANUALLY.
 * IT IS GENERATED BY src/scripts/generate.ts
 * 
 */

export interface PromptCompletionInput {
  prompt: string;
  model?:
    | "openai-gpt35"
    | "openai-gpt35-16k"
    | "openai-gpt35-0613"
    | "openai-gpt4"
    | "openai-gpt4-0613"
    | "anthropic-claude-v2"
    | "anthropic-claude-instant-v1"
    | "meta-llama2-70b"
    | "meta-llama-34b-instruct"
    | "anthropic-claude-v1"
    | "anthropic-claude-instant-v1-100k"
    | "anthropic-claude-v1-100k"
    | "palm-chat-bison"
    | "palm-text-bison"
    | "cohere-command-light"
    | "cohere-command";
  history?: {
    role: "user" | "ai" | "function";
    message?: string;
    /**
     * Only needed if role === "function". This should be the name of the function whose output is in "message"
     */
    name?: string;
    function_call?: {
      name: string;
      arguments: string;
    };
  }[];
  /**
   * If true, prompt isn't included in what gets sent to the llm. mostly useful for re-prompting an llm after an function call
   */
  history_only?: boolean;
  system_prompt?: string;
  strip_linebreaks?: boolean;
  temperature?: number;
  validators?: (
    | {
        _oneof_type_?: "regex";
        pattern: string;
        flags?: string;
        [k: string]: any | undefined;
      }
    | {
        _oneof_type_?: "is_json";
        [k: string]: any | undefined;
      }
    | {
        _oneof_type_?: "jsonschema";
        /**
         * A JSONSchema object. For example: {"type": "object", "properties": {"name": {"type": "string"}}}
         */
        schema?: {
          [k: string]: any | undefined;
        };
        [k: string]: any | undefined;
      }
  )[];
  /**
   * If a prompt variable is too long, split the variable into chunks, and run the entire prompt on each chunk. Very helpful for processing large pdfs.
   */
  split_and_map?: boolean;
  memory?: {
    variable?: string;
    optimization?:
      | {
          type: "summarize";
          prompt?: string;
          model?:
            | "openai-gpt35"
            | "openai-gpt35-16k"
            | "openai-gpt35-0613"
            | "openai-gpt4"
            | "openai-gpt4-0613"
            | "anthropic-claude-v2"
            | "anthropic-claude-instant-v1"
            | "meta-llama2-70b"
            | "meta-llama-34b-instruct"
            | "anthropic-claude-v1"
            | "anthropic-claude-instant-v1-100k"
            | "anthropic-claude-v1-100k"
            | "palm-chat-bison"
            | "palm-text-bison"
            | "cohere-command-light"
            | "cohere-command";
          max_prompts?: number;
        }
      | {
          type: "query";
          query?: string;
          query_type?: "keyword" | "vector";
          fields?: string[];
          page_size?: number;
        }
      | {
          type: "all";
        };
  }[];
  functions?: {
    name: string;
    description?: string;
    /**
     * JSONSchema for the params of the function
     */
    parameters?: {
      [k: string]: any | undefined;
    };
  }[];
  debug?: boolean;
}

export interface PromptCompletionOutput {
  answer: string;
  prompt: string;
  validation_history: {
    role: "user" | "ai" | "function";
    message?: string;
    /**
     * Only needed if role === "function". This should be the name of the function whose output is in "message"
     */
    name?: string;
    function_call?: {
      name: string;
      arguments: string;
    };
  }[];
  split_answers?: string[];
  user_key_used: boolean;
  credits_cost?: number;
  errors?: {
    body?: string;
    [k: string]: any | undefined;
  }[];
  debug?: {
    memory?: {
      variable?: string;
      optimization?:
        | {
            type: "summarize";
            prompt?: string;
            model?:
              | "openai-gpt35"
              | "openai-gpt35-16k"
              | "openai-gpt35-0613"
              | "openai-gpt4"
              | "openai-gpt4-0613"
              | "anthropic-claude-v2"
              | "anthropic-claude-instant-v1"
              | "meta-llama2-70b"
              | "meta-llama-34b-instruct"
              | "anthropic-claude-v1"
              | "anthropic-claude-instant-v1-100k"
              | "anthropic-claude-v1-100k"
              | "palm-chat-bison"
              | "palm-text-bison"
              | "cohere-command-light"
              | "cohere-command";
            max_prompts?: number;
          }
        | {
            type: "query";
            query?: string;
            query_type?: "keyword" | "vector";
            fields?: string[];
            page_size?: number;
          }
        | {
            type: "all";
          };
    }[];
    [k: string]: any | undefined;
  };
  history_items: {
    role: "user" | "ai" | "function";
    message?: string;
    /**
     * Only needed if role === "function". This should be the name of the function whose output is in "message"
     */
    name?: string;
    function_call?: {
      name: string;
      arguments: string;
    };
  }[];
}

export interface ApiCallInput {
  url: string;
  method: "GET" | "POST" | "PUT" | "HEAD" | "PATCH" | "DELETE" | "OPTIONS";
  headers?: {
    [k: string]: any | undefined;
  };
  body?:
    | string
    | {
        [k: string]: any | undefined;
      };
  response_type?: "string" | "json" | "arrayBuffer" | "blob";
}

export interface ApiCallOutput {
  response_body: any;
  status: number;
}

export interface JsCodeTransformationInput {
  code: string;
}

export interface JsCodeTransformationOutput {
  /**
   * Return value of provided code
   */
  transformed: {
    [k: string]: any | undefined;
  };
  /**
   * Duration of provided code in milliseconds
   */
  duration: number;
  [k: string]: any | undefined;
}

export interface SearchInput {
  dataset_id: string;
  query: string;
  query_type?: "keyword" | "vector";
  vector_field?: string;
  /**
   * The model name to use.
   */
  model?:
    | "image_text"
    | "text_image"
    | "all-mpnet-base-v2"
    | "clip-vit-b-32-image"
    | "clip-vit-b-32-text"
    | "clip-vit-l-14-image"
    | "clip-vit-l-14-text"
    | "sentence-transformers"
    | "text-embedding-ada-002"
    | "cohere-small"
    | "cohere-large"
    | "cohere-multilingual-22-12";
  content_field?: string;
  output_all_fields?: boolean;
  page_size?: number;
  raw_filters?: any[];
}

export interface SearchOutput {
  results: (
    | string
    | {
        [k: string]: any | undefined;
      }
  )[];
  [k: string]: any | undefined;
}

export interface SearchArrayInput {
  array: any[];
  query: string;
  page_size?: number;
  field?: string;
}

export interface SearchArrayOutput {
  results: any[];
  scores: number[];
}

export interface BulkUpdateInput {
  dataset_id: string;
  documents: any[];
  clean_field_names?: boolean;
  ingest_in_background?: boolean;
}

export interface BulkUpdateOutput {
  /**
   * Number of successfully processed documents.
   */
  inserted: number;
  /**
   * Information about documents that were not processed successfully.
   */
  failed_documents: {
    /**
     * _id field of unprocessed document.
     */
    _id?: {
      [k: string]: any | undefined;
    };
    error?: {
      /**
       * http status code of individual document insertion operation.
       */
      status?: number;
      /**
       * body response of individual document insertion operation.
       */
      body?: string;
    };
    [k: string]: any | undefined;
  }[];
  [k: string]: any | undefined;
}

export interface GenerateVectorEmbeddingInput {
  input: string;
  /**
   * The model name to use.
   */
  model:
    | "image_text"
    | "text_image"
    | "all-mpnet-base-v2"
    | "clip-vit-b-32-image"
    | "clip-vit-b-32-text"
    | "clip-vit-l-14-image"
    | "clip-vit-l-14-text"
    | "sentence-transformers"
    | "text-embedding-ada-002"
    | "cohere-small"
    | "cohere-large"
    | "cohere-multilingual-22-12";
}

export interface GenerateVectorEmbeddingOutput {
  vector: any[];
  [k: string]: any | undefined;
}

export interface SendEmailStepInput {
  destinationEmail: string;
  subject?: string;
  text: string;
}

export interface SendEmailStepOutput {
  [k: string]: any | undefined;
}

export interface RedisSearchInput {
  index: string;
  query: string;
  vector_field: string;
  /**
   * The model name to use.
   */
  model:
    | "image_text"
    | "text_image"
    | "all-mpnet-base-v2"
    | "clip-vit-b-32-image"
    | "clip-vit-b-32-text"
    | "clip-vit-l-14-image"
    | "clip-vit-l-14-text"
    | "sentence-transformers"
    | "text-embedding-ada-002"
    | "cohere-small"
    | "cohere-large"
    | "cohere-multilingual-22-12";
  page_size?: number;
}

export interface RedisSearchOutput {
  results: any[];
  [k: string]: any | undefined;
}

export interface RedisInsertInput {
  key: string;
  document: {
    [k: string]: any | undefined;
  };
  wait?: boolean;
}

export interface RedisInsertOutput {
  inserted: number;
  [k: string]: any | undefined;
}

export interface JoinArrayInput {
  array: string[];
  sep: string;
}

export interface JoinArrayOutput {
  text: string;
}

export interface PdfToTextInput {
  pdf_url: string;
  use_ocr?: boolean;
  ocr_type?: "Fast & 95% accurate" | "Slow & 99.9% accurate";
}

export interface PdfToTextOutput {
  text: string;
  number_of_pages: number;
}

export interface AudioToTextInput {
  audio_url: string;
  response_type?: string;
}

export interface AudioToTextOutput {
  text: string;
  language?: string;
  duration?: number;
  segments?: {
    [k: string]: any | undefined;
  }[];
}

export interface AudioToTextV2Input {
  audio_url: string;
  diarize?: boolean;
}

export interface AudioToTextV2Output {
  metadata: {
    duration?: number;
    channels?: number;
    [k: string]: any | undefined;
  };
  results: {
    channels?: {
      [k: string]: any | undefined;
    }[];
    [k: string]: any | undefined;
  };
}

export interface AnonymizeTextInput {
  input: string;
}

export interface AnonymizeTextOutput {
  output: string;
}

export interface NemoGuardrailsInput {
  input: string;
  usecase?: "Jailbreak Detection" | "Topic Control" | "Fact Checking";
  documents?: any[];
  colang_content?: string;
  yaml_content?: string;
}

export interface NemoGuardrailsOutput {
  output: string;
}

export interface MarkdownInput {
  markdown: string;
}

export interface MarkdownOutput {
  [k: string]: any | undefined;
}

export interface RelevanceApiCallInput {
  path: string;
  method: "GET" | "POST" | "PUT";
  body?: {
    [k: string]: any | undefined;
  };
}

export interface RelevanceApiCallOutput {
  response_body: {
    [k: string]: any | undefined;
  };
  status: number;
}

export interface SummarizeKnowledgeInput {
  knowledge: string;
  optimization?:
    | {
        type: "summarize";
        prompt?: string;
        model?:
          | "openai-gpt35"
          | "openai-gpt35-16k"
          | "openai-gpt35-0613"
          | "openai-gpt4"
          | "openai-gpt4-0613"
          | "anthropic-claude-v2"
          | "anthropic-claude-instant-v1"
          | "meta-llama2-70b"
          | "meta-llama-34b-instruct"
          | "anthropic-claude-v1"
          | "anthropic-claude-instant-v1-100k"
          | "anthropic-claude-v1-100k"
          | "palm-chat-bison"
          | "palm-text-bison"
          | "cohere-command-light"
          | "cohere-command";
        max_prompts?: number;
      }
    | {
        type: "query";
        query?: string;
        query_type?: "keyword" | "vector";
        fields?: string[];
        page_size?: number;
      }
    | {
        type: "all";
      };
  /**
   * The Summary generated will be limited to less than this many words.
   */
  token_limit?: number;
}

export interface SummarizeKnowledgeOutput {
  answer: string;
  credits_cost: number;
  optimization:
    | {
        type: "summarize";
        prompt?: string;
        model?:
          | "openai-gpt35"
          | "openai-gpt35-16k"
          | "openai-gpt35-0613"
          | "openai-gpt4"
          | "openai-gpt4-0613"
          | "anthropic-claude-v2"
          | "anthropic-claude-instant-v1"
          | "meta-llama2-70b"
          | "meta-llama-34b-instruct"
          | "anthropic-claude-v1"
          | "anthropic-claude-instant-v1-100k"
          | "anthropic-claude-v1-100k"
          | "palm-chat-bison"
          | "palm-text-bison"
          | "cohere-command-light"
          | "cohere-command";
        max_prompts?: number;
      }
    | {
        type: "query";
        query?: string;
        query_type?: "keyword" | "vector";
        fields?: string[];
        page_size?: number;
      }
    | {
        type: "all";
      };
}

export interface ToJsonInput {
  text: string;
}

export interface ToJsonOutput {
  output: any;
}

export interface ExportToFileInput {
  data: {
    [k: string]: any | undefined;
  };
  extension?: string;
}

export interface ExportToFileOutput {
  export_url: string;
}

export interface ObjectKeyFilterInput {
  haystack: {
    [k: string]: any | undefined;
  };
  needle: any[] | string;
}

export interface ObjectKeyFilterOutput {
  filtered: any;
}

export interface RegexInput {
  regex: string;
  string: string;
}

export interface RegexOutput {
  match: any;
  found?: boolean;
}

export interface RunTransformationInput {
  transformation_id: string;
  params: {
    [k: string]: any | undefined;
  };
}

export interface RunTransformationOutput {
  output: any;
}

export interface RunChainInput {
  studio_id: string;
  project?: string;
  version?: string;
  params: {
    [k: string]: any | undefined;
  };
}

export interface RunChainOutput {
  output: {
    [k: string]: any | undefined;
  };
  state?: {
    [k: string]: any | undefined;
  };
  /**
   * Status of the workflow. Used for knowing when to send an email notification.
   */
  status: "complete" | "inprogress" | "failed" | "cancelled";
  errors: {
    body?: string;
    [k: string]: any | undefined;
  }[];
  cost?: number;
  credits_used?: {
    credits: number;
    name: string;
    num_units?: number;
    multiplier?: number;
  }[];
  executionTime: number;
}

export interface TriggerWorkflowInput {
  workflow_id: string;
  dataset_id: string;
  params: {
    [k: string]: any | undefined;
  };
}

export interface TriggerWorkflowOutput {
  job_id: string;
  [k: string]: any | undefined;
}

export interface SplitTextInput {
  text: string;
  method: "tokens" | "separator" | "newline";
  num_tokens?: number;
  num_tokens_to_slide_window?: number;
  sep?: string;
}

export interface SplitTextOutput {
  chunks: string[];
  [k: string]: any | undefined;
}

export interface CombineArrayInput {
  array?: any[];
  method?: "concat";
  [k: string]: any | undefined;
}

export interface CombineArrayOutput {
  combined: any;
  [k: string]: any | undefined;
}

export interface PythonCodeTransformationInput {
  packages?: string[];
  run_commands?: string[];
  code: string;
  [k: string]: any | undefined;
}

export interface PythonCodeTransformationOutput {
  /**
   * Return value of provided code
   */
  transformed: {
    [k: string]: any | undefined;
  };
  /**
   * Duration of provided code in milliseconds
   */
  duration: number;
  /**
   * Return stdout of provided code
   */
  stdout: {
    [k: string]: any | undefined;
  };
  /**
   * Return stderr of provided code
   */
  stderr: {
    [k: string]: any | undefined;
  };
  [k: string]: any | undefined;
}

export interface UploadFileS3Input {
  blob: any;
  extension?: string;
  [k: string]: any | undefined;
}

export interface UploadFileS3Output {
  url: string;
  [k: string]: any | undefined;
}

/**
 * Base class for all abstractmodels
 *
 */
export interface SerperGoogleSearchInput {
  search_query: string;
  [k: string]: any | undefined;
}

/**
 * Base class for all abstractmodels
 *
 */
export interface SerperGoogleSearchOutput {
  peopleAlsoAsk?: any[];
  relatedSearches?: any[];
  organic: any[];
  user_key_used: boolean;
  [k: string]: any | undefined;
}

export interface AnalyseImageInput {
  image_url: string;
  prompt: string;
}

export interface AnalyseImageOutput {
  output: string;
}

export interface TextToImageInput {
  prompt: string;
  num_outputs: 1 | 2 | 3 | 4;
}

export interface TextToImageOutput {
  images: string[];
}

export interface TextToSpeechInput {
  prompt: string;
  voice:
    | "Rachel"
    | "Clyde"
    | "Domi"
    | "Dave"
    | "Fin"
    | "Bella"
    | "Antoni"
    | "Thomas"
    | "Charlie"
    | "Emily"
    | "Elli"
    | "Callum"
    | "Patrick"
    | "Harry"
    | "Liam"
    | "Dorothy"
    | "Josh"
    | "Arnold"
    | "Charlotte"
    | "Matilda"
    | "Matthew"
    | "James"
    | "Joseph"
    | "Jeremy"
    | "Michael"
    | "Ethan"
    | "Gigi"
    | "Freya"
    | "Grace"
    | "Daniel"
    | "Serena"
    | "Adam"
    | "Nicole"
    | "Jessie"
    | "Ryan"
    | "Sam"
    | "Glinda"
    | "Giovanni"
    | "Mimi";
}

export interface TextToSpeechOutput {
  audio_url: string;
}

export interface StableDiffusionXlInput {
  prompt: string;
  steps?: number;
}

export interface StableDiffusionXlOutput {
  images: string[];
}

export interface TruncateTextInput {
  text: string | any[];
  num_tokens: number;
}

export interface TruncateTextOutput {
  chunks: string | any[];
  [k: string]: any | undefined;
}

export interface ConnectPlaystoreInput {
  playstore_id: string;
  sample_size?: number;
  country: string;
}

export interface ConnectPlaystoreOutput {
  output: {
    reviewId?: string;
    userName?: string;
    userImage?: string;
    content?: string;
    [k: string]: any | undefined;
  }[];
}

export interface BrowserlessScrapeInput {
  website_url: string;
  method?: "Text" | "HTML";
  element_selector?: any[];
  extra_headers?: {
    [k: string]: any | undefined;
  };
}

export interface BrowserlessScrapeOutput {
  output: {
    page?: string;
    selectors?: {
      [k: string]: any | undefined;
    };
  };
  user_key_used: boolean;
}

export interface TranslateInput {
  text: string;
  sourceLanguageCode?: string;
  targetLanguageCode: string;
}

export interface TranslateOutput {
  result: string;
}

export interface ExcelToTextInput {
  excel_url: string;
}

export interface ExcelToTextOutput {
  text: string[];
}

export interface WordToTextInput {
  doc_url: string;
}

export interface WordToTextOutput {
  text: string;
}

export interface GetDatasetFieldInput {
  dataset_id: string;
  field?: string;
  page_size?: number;
}

export interface GetDatasetFieldOutput {
  results: any[];
}

export interface FileToTextLlmFriendlyInput {
  file_url: string;
}

export interface FileToTextLlmFriendlyOutput {
  text: string;
  detected_type: string;
  metadata?: {
    [k: string]: any | undefined;
  };
}

export interface EchoInput {
  data: any;
  [k: string]: any | undefined;
}

export interface EchoOutput {
  data: any;
  [k: string]: any | undefined;
}

export interface SpreadsheetToJsonInput {
  file_url: string;
}

export interface SpreadsheetToJsonOutput {
  rows: {
    [k: string]: any | undefined;
  }[];
}

export interface FuzzySearchInput {
  query: string;
  text: string;
}

export interface FuzzySearchOutput {
  text: string;
  match: string;
  start: number;
  end: number;
}

export type BuiltinTransformations = {
  prompt_completion: { input: PromptCompletionInput, output: PromptCompletionOutput }
  api_call: { input: ApiCallInput, output: ApiCallOutput }
  js_code_transformation: { input: JsCodeTransformationInput, output: JsCodeTransformationOutput }
  search: { input: SearchInput, output: SearchOutput }
  search_array: { input: SearchArrayInput, output: SearchArrayOutput }
  bulk_update: { input: BulkUpdateInput, output: BulkUpdateOutput }
  generate_vector_embedding: { input: GenerateVectorEmbeddingInput, output: GenerateVectorEmbeddingOutput }
  send_email_step: { input: SendEmailStepInput, output: SendEmailStepOutput }
  redis_search: { input: RedisSearchInput, output: RedisSearchOutput }
  redis_insert: { input: RedisInsertInput, output: RedisInsertOutput }
  join_array: { input: JoinArrayInput, output: JoinArrayOutput }
  pdf_to_text: { input: PdfToTextInput, output: PdfToTextOutput }
  audio_to_text: { input: AudioToTextInput, output: AudioToTextOutput }
  audio_to_text_v2: { input: AudioToTextV2Input, output: AudioToTextV2Output }
  anonymize_text: { input: AnonymizeTextInput, output: AnonymizeTextOutput }
  nemo_guardrails: { input: NemoGuardrailsInput, output: NemoGuardrailsOutput }
  markdown: { input: MarkdownInput, output: MarkdownOutput }
  relevance_api_call: { input: RelevanceApiCallInput, output: RelevanceApiCallOutput }
  summarize_knowledge: { input: SummarizeKnowledgeInput, output: SummarizeKnowledgeOutput }
  to_json: { input: ToJsonInput, output: ToJsonOutput }
  export_to_file: { input: ExportToFileInput, output: ExportToFileOutput }
  object_key_filter: { input: ObjectKeyFilterInput, output: ObjectKeyFilterOutput }
  regex: { input: RegexInput, output: RegexOutput }
  run_transformation: { input: RunTransformationInput, output: RunTransformationOutput }
  run_chain: { input: RunChainInput, output: RunChainOutput }
  trigger_workflow: { input: TriggerWorkflowInput, output: TriggerWorkflowOutput }
  split_text: { input: SplitTextInput, output: SplitTextOutput }
  combine_array: { input: CombineArrayInput, output: CombineArrayOutput }
  python_code_transformation: { input: PythonCodeTransformationInput, output: PythonCodeTransformationOutput }
  upload_file_s3: { input: UploadFileS3Input, output: UploadFileS3Output }
  serper_google_search: { input: SerperGoogleSearchInput, output: SerperGoogleSearchOutput }
  analyse_image: { input: AnalyseImageInput, output: AnalyseImageOutput }
  text_to_image: { input: TextToImageInput, output: TextToImageOutput }
  text_to_speech: { input: TextToSpeechInput, output: TextToSpeechOutput }
  stable_diffusion_xl: { input: StableDiffusionXlInput, output: StableDiffusionXlOutput }
  truncate_text: { input: TruncateTextInput, output: TruncateTextOutput }
  connect_playstore: { input: ConnectPlaystoreInput, output: ConnectPlaystoreOutput }
  browserless_scrape: { input: BrowserlessScrapeInput, output: BrowserlessScrapeOutput }
  translate: { input: TranslateInput, output: TranslateOutput }
  excel_to_text: { input: ExcelToTextInput, output: ExcelToTextOutput }
  word_to_text: { input: WordToTextInput, output: WordToTextOutput }
  get_dataset_field: { input: GetDatasetFieldInput, output: GetDatasetFieldOutput }
  file_to_text_llm_friendly: { input: FileToTextLlmFriendlyInput, output: FileToTextLlmFriendlyOutput }
  echo: { input: EchoInput, output: EchoOutput }
  spreadsheet_to_json: { input: SpreadsheetToJsonInput, output: SpreadsheetToJsonOutput }
  fuzzy_search: { input: FuzzySearchInput, output: FuzzySearchOutput }
}