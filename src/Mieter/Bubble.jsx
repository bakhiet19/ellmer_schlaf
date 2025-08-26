
const Bubble = ({children , className}) => {
  return (
     <div  style={{
        animation: 'bubbleFloat 3s ease-in-out infinite',
        animationDelay: '0.1s'
      }}
     className={`absolute px-2 sm:px-3 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs shadow-lg transition-transform duration-300 hidden lg:block bubble-anim borderRed logoBG  ${className}`} >
               {children}
              </div>
  );
};

export default Bubble;