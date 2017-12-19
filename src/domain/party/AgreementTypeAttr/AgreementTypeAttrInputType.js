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

const AgreementTypeAttrInputType = new GraphQLInputObjectType({
  name: 'AgreementTypeAttrInputType',
  description: 'input type for AgreementTypeAttr',

  fields: () => ({
    agreementTypeId: {type: GraphQLString},
    attrName: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {AgreementTypeAttrInputType};
    