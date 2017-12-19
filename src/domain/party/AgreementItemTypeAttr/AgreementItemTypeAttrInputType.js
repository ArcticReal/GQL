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

const AgreementItemTypeAttrInputType = new GraphQLInputObjectType({
  name: 'AgreementItemTypeAttrInputType',
  description: 'input type for AgreementItemTypeAttr',

  fields: () => ({
    agreementItemTypeId: {type: GraphQLString},
    attrName: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {AgreementItemTypeAttrInputType};
    