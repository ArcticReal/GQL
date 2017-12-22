import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

const ProductStoreEmailSettingResponseType = new GraphQLObjectType({
  name: 'ProductStoreEmailSettingResponseType',
  description: 'response type for ProductStoreEmailSetting',

  fields: () => ({
    bccAddress: {type: GraphQLString},
    bodyScreenLocation: {type: GraphQLString},
    ccAddress: {type: GraphQLString},
    contentType: {type: GraphQLString},
    emailType: {type: GraphQLString},
    fromAddress: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    subject: {type: GraphQLString},
    xslfoAttachScreenLocation: {type: GraphQLString}
  })
});

export {ProductStoreEmailSettingResponseType};
    